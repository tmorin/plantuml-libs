# Teradata


```text
simpleicons-14/T/Teradata
```

```text
include('simpleicons-14/T/Teradata')
```



| Illustration | Teradata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Teradata.png) | ![illustration for Teradata](../../simpleicons-14/T/Teradata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeradataXs>`
- `<$TeradataSm>`
- `<$TeradataMd>`
- `<$TeradataLg>`





## Teradata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Teradata
include('simpleicons-14/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teradata
include('simpleicons-14/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label', 'an optional description')
@enduml
```

