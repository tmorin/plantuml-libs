# Pimcore


```text
simpleicons-14/P/Pimcore
```

```text
include('simpleicons-14/P/Pimcore')
```



| Illustration | Pimcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pimcore.png) | ![illustration for Pimcore](../../simpleicons-14/P/Pimcore.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pimcore
include('simpleicons-14/P/Pimcore')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pimcore
include('simpleicons-14/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label', 'an optional description')
@enduml
```

