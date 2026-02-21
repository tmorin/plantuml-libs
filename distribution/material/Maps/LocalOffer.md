# LocalOffer


```text
material/Maps/LocalOffer
```

```text
include('material/Maps/LocalOffer')
```



| Illustration | LocalOffer |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalOffer.png) | ![illustration for LocalOffer](../../material/Maps/LocalOffer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalOfferXs>`
- `<$LocalOfferSm>`
- `<$LocalOfferMd>`
- `<$LocalOfferLg>`





## LocalOffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalOffer
include('material/Maps/LocalOffer')

' renders the element
LocalOffer('LocalOffer', 'Local Offer', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LocalOffer
include('material/Maps/LocalOffer')

' renders the element
LocalOffer('LocalOffer', 'Local Offer', 'an optional tech label', 'an optional description')
@enduml
```

