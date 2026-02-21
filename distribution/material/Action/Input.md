# Input


```text
material/Action/Input
```

```text
include('material/Action/Input')
```



| Illustration | Input |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Input.png) | ![illustration for Input](../../material/Action/Input.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InputXs>`
- `<$InputSm>`
- `<$InputMd>`
- `<$InputLg>`





## Input

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Input
include('material/Action/Input')

' renders the element
Input('Input', 'Input', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Input
include('material/Action/Input')

' renders the element
Input('Input', 'Input', 'an optional tech label', 'an optional description')
@enduml
```

