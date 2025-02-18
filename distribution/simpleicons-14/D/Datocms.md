# Datocms


```text
simpleicons-14/D/Datocms
```

```text
include('simpleicons-14/D/Datocms')
```



| Illustration | Datocms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Datocms.png) | ![illustration for Datocms](../../simpleicons-14/D/Datocms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatocmsXs>`
- `<$DatocmsSm>`
- `<$DatocmsMd>`
- `<$DatocmsLg>`





## Datocms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Datocms
include('simpleicons-14/D/Datocms')

' renders the element
Datocms('Datocms', 'Datocms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datocms
include('simpleicons-14/D/Datocms')

' renders the element
Datocms('Datocms', 'Datocms', 'an optional tech label', 'an optional description')
@enduml
```

