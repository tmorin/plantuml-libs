# Chromewebstore


```text
simpleicons-14/C/Chromewebstore
```

```text
include('simpleicons-14/C/Chromewebstore')
```



| Illustration | Chromewebstore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chromewebstore.png) | ![illustration for Chromewebstore](../../simpleicons-14/C/Chromewebstore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChromewebstoreXs>`
- `<$ChromewebstoreSm>`
- `<$ChromewebstoreMd>`
- `<$ChromewebstoreLg>`





## Chromewebstore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chromewebstore
include('simpleicons-14/C/Chromewebstore')

' renders the element
Chromewebstore('Chromewebstore', 'Chromewebstore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chromewebstore
include('simpleicons-14/C/Chromewebstore')

' renders the element
Chromewebstore('Chromewebstore', 'Chromewebstore', 'an optional tech label', 'an optional description')
@enduml
```

