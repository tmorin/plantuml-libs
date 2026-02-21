# Ferretdb


```text
simpleicons/F/Ferretdb
```

```text
include('simpleicons/F/Ferretdb')
```



| Illustration | Ferretdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Ferretdb.png) | ![illustration for Ferretdb](../../simpleicons/F/Ferretdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FerretdbXs>`
- `<$FerretdbSm>`
- `<$FerretdbMd>`
- `<$FerretdbLg>`





## Ferretdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ferretdb
include('simpleicons/F/Ferretdb')

' renders the element
Ferretdb('Ferretdb', 'Ferretdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ferretdb
include('simpleicons/F/Ferretdb')

' renders the element
Ferretdb('Ferretdb', 'Ferretdb', 'an optional tech label', 'an optional description')
@enduml
```

