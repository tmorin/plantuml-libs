# Gradio


```text
simpleicons/G/Gradio
```

```text
include('simpleicons/G/Gradio')
```



| Illustration | Gradio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gradio.png) | ![illustration for Gradio](../../simpleicons/G/Gradio.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gradio
include('simpleicons/G/Gradio')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gradio
include('simpleicons/G/Gradio')

' renders the element
Gradio('Gradio', 'Gradio', 'an optional tech label', 'an optional description')
@enduml
```

