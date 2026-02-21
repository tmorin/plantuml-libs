# Pimcore


```text
simpleicons/P/Pimcore
```

```text
include('simpleicons/P/Pimcore')
```



| Illustration | Pimcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pimcore.png) | ![illustration for Pimcore](../../simpleicons/P/Pimcore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PimcoreXs>`
- `<$PimcoreSm>`
- `<$PimcoreMd>`
- `<$PimcoreLg>`





## Pimcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pimcore
include('simpleicons/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pimcore
include('simpleicons/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label', 'an optional description')
@enduml
```

