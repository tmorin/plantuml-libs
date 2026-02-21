# Ferretdb


```text
simpleicons-14/F/Ferretdb
```

```text
include('simpleicons-14/F/Ferretdb')
```



| Illustration | Ferretdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Ferretdb.png) | ![illustration for Ferretdb](../../simpleicons-14/F/Ferretdb.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ferretdb
include('simpleicons-14/F/Ferretdb')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ferretdb
include('simpleicons-14/F/Ferretdb')

' renders the element
Ferretdb('Ferretdb', 'Ferretdb', 'an optional tech label', 'an optional description')
@enduml
```

