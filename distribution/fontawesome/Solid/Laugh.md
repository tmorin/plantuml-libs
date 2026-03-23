# Laugh


```text
fontawesome/Solid/Laugh
```

```text
include('fontawesome/Solid/Laugh')
```



| Illustration | Laugh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Laugh.png) | ![illustration for Laugh](../../fontawesome/Solid/Laugh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaughXs>`
- `<$LaughSm>`
- `<$LaughMd>`
- `<$LaughLg>`





## Laugh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Laugh
include('fontawesome/Solid/Laugh')

' renders the element
Laugh('Laugh', 'Laugh', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Laugh
include('fontawesome/Solid/Laugh')

' renders the element
Laugh('Laugh', 'Laugh', 'an optional tech label', 'an optional description')
@enduml
```

