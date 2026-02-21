# Airtransat


```text
simpleicons-14/A/Airtransat
```

```text
include('simpleicons-14/A/Airtransat')
```



| Illustration | Airtransat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airtransat.png) | ![illustration for Airtransat](../../simpleicons-14/A/Airtransat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirtransatXs>`
- `<$AirtransatSm>`
- `<$AirtransatMd>`
- `<$AirtransatLg>`





## Airtransat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airtransat
include('simpleicons-14/A/Airtransat')

' renders the element
Airtransat('Airtransat', 'Airtransat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airtransat
include('simpleicons-14/A/Airtransat')

' renders the element
Airtransat('Airtransat', 'Airtransat', 'an optional tech label', 'an optional description')
@enduml
```

