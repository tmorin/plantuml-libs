# Gradio


```text
simpleicons-14/G/Gradio
```

```text
include('simpleicons-14/G/Gradio')
```



| Illustration | Gradio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gradio.png) | ![illustration for Gradio](../../simpleicons-14/G/Gradio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GradioXs>`
- `<$GradioSm>`
- `<$GradioMd>`
- `<$GradioLg>`





## Gradio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gradio
include('simpleicons-14/G/Gradio')

' renders the element
Gradio('Gradio', 'Gradio', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gradio
include('simpleicons-14/G/Gradio')

' renders the element
Gradio('Gradio', 'Gradio', 'an optional tech label', 'an optional description')
@enduml
```

