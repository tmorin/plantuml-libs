# Gopuram


```text
fontawesome/Solid/Gopuram
```

```text
include('fontawesome/Solid/Gopuram')
```



| Illustration | Gopuram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gopuram.png) | ![illustration for Gopuram](../../fontawesome/Solid/Gopuram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GopuramXs>`
- `<$GopuramSm>`
- `<$GopuramMd>`
- `<$GopuramLg>`





## Gopuram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gopuram
include('fontawesome/Solid/Gopuram')

' renders the element
Gopuram('Gopuram', 'Gopuram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gopuram
include('fontawesome/Solid/Gopuram')

' renders the element
Gopuram('Gopuram', 'Gopuram', 'an optional tech label', 'an optional description')
@enduml
```

