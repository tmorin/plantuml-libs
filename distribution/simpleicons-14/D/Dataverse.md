# Dataverse


```text
simpleicons-14/D/Dataverse
```

```text
include('simpleicons-14/D/Dataverse')
```



| Illustration | Dataverse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dataverse.png) | ![illustration for Dataverse](../../simpleicons-14/D/Dataverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DataverseXs>`
- `<$DataverseSm>`
- `<$DataverseMd>`
- `<$DataverseLg>`





## Dataverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dataverse
include('simpleicons-14/D/Dataverse')

' renders the element
Dataverse('Dataverse', 'Dataverse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dataverse
include('simpleicons-14/D/Dataverse')

' renders the element
Dataverse('Dataverse', 'Dataverse', 'an optional tech label', 'an optional description')
@enduml
```

