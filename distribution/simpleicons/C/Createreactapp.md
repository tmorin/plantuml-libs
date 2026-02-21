# Createreactapp


```text
simpleicons/C/Createreactapp
```

```text
include('simpleicons/C/Createreactapp')
```



| Illustration | Createreactapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Createreactapp.png) | ![illustration for Createreactapp](../../simpleicons/C/Createreactapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreatereactappXs>`
- `<$CreatereactappSm>`
- `<$CreatereactappMd>`
- `<$CreatereactappLg>`





## Createreactapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Createreactapp
include('simpleicons/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Createreactapp
include('simpleicons/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label', 'an optional description')
@enduml
```

