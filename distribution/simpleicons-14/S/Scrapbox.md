# Scrapbox


```text
simpleicons-14/S/Scrapbox
```

```text
include('simpleicons-14/S/Scrapbox')
```



| Illustration | Scrapbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scrapbox.png) | ![illustration for Scrapbox](../../simpleicons-14/S/Scrapbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrapboxXs>`
- `<$ScrapboxSm>`
- `<$ScrapboxMd>`
- `<$ScrapboxLg>`





## Scrapbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scrapbox
include('simpleicons-14/S/Scrapbox')

' renders the element
Scrapbox('Scrapbox', 'Scrapbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrapbox
include('simpleicons-14/S/Scrapbox')

' renders the element
Scrapbox('Scrapbox', 'Scrapbox', 'an optional tech label', 'an optional description')
@enduml
```

