# FlaskVial


```text
fontawesome-6/Solid/FlaskVial
```

```text
include('fontawesome-6/Solid/FlaskVial')
```



| Illustration | FlaskVial |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FlaskVial.png) | ![illustration for FlaskVial](../../fontawesome-6/Solid/FlaskVial.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlaskVialXs>`
- `<$FlaskVialSm>`
- `<$FlaskVialMd>`
- `<$FlaskVialLg>`





## FlaskVial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FlaskVial
include('fontawesome-6/Solid/FlaskVial')

' renders the element
FlaskVial('FlaskVial', 'Flask Vial', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FlaskVial
include('fontawesome-6/Solid/FlaskVial')

' renders the element
FlaskVial('FlaskVial', 'Flask Vial', 'an optional tech label', 'an optional description')
@enduml
```

