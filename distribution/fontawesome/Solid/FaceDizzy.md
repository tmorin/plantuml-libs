# FaceDizzy


```text
fontawesome/Solid/FaceDizzy
```

```text
include('fontawesome/Solid/FaceDizzy')
```



| Illustration | FaceDizzy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceDizzy.png) | ![illustration for FaceDizzy](../../fontawesome/Solid/FaceDizzy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceDizzyXs>`
- `<$FaceDizzySm>`
- `<$FaceDizzyMd>`
- `<$FaceDizzyLg>`





## FaceDizzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceDizzy
include('fontawesome/Solid/FaceDizzy')

' renders the element
FaceDizzy('FaceDizzy', 'Face Dizzy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceDizzy
include('fontawesome/Solid/FaceDizzy')

' renders the element
FaceDizzy('FaceDizzy', 'Face Dizzy', 'an optional tech label', 'an optional description')
@enduml
```

