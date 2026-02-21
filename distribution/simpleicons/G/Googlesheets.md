# Googlesheets


```text
simpleicons/G/Googlesheets
```

```text
include('simpleicons/G/Googlesheets')
```



| Illustration | Googlesheets |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlesheets.png) | ![illustration for Googlesheets](../../simpleicons/G/Googlesheets.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlesheets
include('simpleicons/G/Googlesheets')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlesheets
include('simpleicons/G/Googlesheets')

' renders the element
Googlesheets('Googlesheets', 'Googlesheets', 'an optional tech label', 'an optional description')
@enduml
```

