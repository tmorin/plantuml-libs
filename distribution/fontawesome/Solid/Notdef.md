# Notdef


```text
fontawesome/Solid/Notdef
```

```text
include('fontawesome/Solid/Notdef')
```



| Illustration | Notdef |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Notdef.png) | ![illustration for Notdef](../../fontawesome/Solid/Notdef.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotdefXs>`
- `<$NotdefSm>`
- `<$NotdefMd>`
- `<$NotdefLg>`





## Notdef

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Notdef
include('fontawesome/Solid/Notdef')

' renders the element
Notdef('Notdef', 'Notdef', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notdef
include('fontawesome/Solid/Notdef')

' renders the element
Notdef('Notdef', 'Notdef', 'an optional tech label', 'an optional description')
@enduml
```

