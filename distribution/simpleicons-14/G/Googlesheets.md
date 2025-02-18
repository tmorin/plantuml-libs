# Googlesheets


```text
simpleicons-14/G/Googlesheets
```

```text
include('simpleicons-14/G/Googlesheets')
```



| Illustration | Googlesheets |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlesheets.png) | ![illustration for Googlesheets](../../simpleicons-14/G/Googlesheets.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglesheetsXs>`
- `<$GooglesheetsSm>`
- `<$GooglesheetsMd>`
- `<$GooglesheetsLg>`





## Googlesheets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlesheets
include('simpleicons-14/G/Googlesheets')

' renders the element
Googlesheets('Googlesheets', 'Googlesheets', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlesheets
include('simpleicons-14/G/Googlesheets')

' renders the element
Googlesheets('Googlesheets', 'Googlesheets', 'an optional tech label', 'an optional description')
@enduml
```

