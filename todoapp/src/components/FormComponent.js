import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'


export default class AddTodo extends Component {
    constructor(props){
        super(props)
        this.handlePush = this.handlePush.bind(this)
    }

handlePush(event){
    // preventdefault : empecher le comportemet par défaut : se charger 
event.preventDefault()
this.props.addTodo(this.titre.value, this.libele.value  )
this.titre.value =''
this.libele.value =''
// mettre à zéro 
}
  render() {
    return (
      <div className=' pt-5'>
        <h1>Formulaire d'ajout d'une todo liste </h1>
        <Form inline='true'  onSubmit={this.handlePush}>
            <FormGroup className=' mr-2 '>
                <Label className='mr-2' htmlFor='titre' >Titre </Label>
                <Input type='text' id='titre' name='titre' 
                
                innerRef={(input) => this.titre = input} />
            </FormGroup>
            <FormGroup className='mr-2 '>
                <Label className='mr-2' htmlFor='libele' >Libele</Label>
                <Input type='libele' id='libele' name='libele' 
                innerRef={(input)=> this.libele = input}

                />
            </FormGroup>
            <Button type='submit' value='Ajouter' color='primary'>Ajouter </Button>
        </Form>
      </div>
    )
  }
}
