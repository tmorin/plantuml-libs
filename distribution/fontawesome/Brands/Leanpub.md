# Leanpub


```text
fontawesome/Brands/Leanpub
```

```text
include('fontawesome/Brands/Leanpub')
```



| Illustration | Leanpub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Leanpub.png) | ![illustration for Leanpub](../../fontawesome/Brands/Leanpub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeanpubXs>`
- `<$LeanpubSm>`
- `<$LeanpubMd>`
- `<$LeanpubLg>`





## Leanpub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Leanpub
include('fontawesome/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Leanpub
include('fontawesome/Brands/Leanpub')

' renders the element
Leanpub('Leanpub', 'Leanpub', 'an optional tech label', 'an optional description')
@enduml
```

