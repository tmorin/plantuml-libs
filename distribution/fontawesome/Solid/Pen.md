# Pen


```text
fontawesome/Solid/Pen
```

```text
include('fontawesome/Solid/Pen')
```



| Illustration | Pen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pen.png) | ![illustration for Pen](../../fontawesome/Solid/Pen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenXs>`
- `<$PenSm>`
- `<$PenMd>`
- `<$PenLg>`





## Pen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pen
include('fontawesome/Solid/Pen')

' renders the element
Pen('Pen', 'Pen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pen
include('fontawesome/Solid/Pen')

' renders the element
Pen('Pen', 'Pen', 'an optional tech label', 'an optional description')
@enduml
```

