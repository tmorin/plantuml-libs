# Airtable


```text
simpleicons-14/A/Airtable
```

```text
include('simpleicons-14/A/Airtable')
```



| Illustration | Airtable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airtable.png) | ![illustration for Airtable](../../simpleicons-14/A/Airtable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirtableXs>`
- `<$AirtableSm>`
- `<$AirtableMd>`
- `<$AirtableLg>`





## Airtable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airtable
include('simpleicons-14/A/Airtable')

' renders the element
Airtable('Airtable', 'Airtable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airtable
include('simpleicons-14/A/Airtable')

' renders the element
Airtable('Airtable', 'Airtable', 'an optional tech label', 'an optional description')
@enduml
```

