# Oclif


```text
simpleicons/O/Oclif
```

```text
include('simpleicons/O/Oclif')
```



| Illustration | Oclif |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Oclif.png) | ![illustration for Oclif](../../simpleicons/O/Oclif.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OclifXs>`
- `<$OclifSm>`
- `<$OclifMd>`
- `<$OclifLg>`





## Oclif

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Oclif
include('simpleicons/O/Oclif')

' renders the element
Oclif('Oclif', 'Oclif', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oclif
include('simpleicons/O/Oclif')

' renders the element
Oclif('Oclif', 'Oclif', 'an optional tech label', 'an optional description')
@enduml
```

