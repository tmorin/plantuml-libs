# Brandfolder


```text
simpleicons-14/B/Brandfolder
```

```text
include('simpleicons-14/B/Brandfolder')
```



| Illustration | Brandfolder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Brandfolder.png) | ![illustration for Brandfolder](../../simpleicons-14/B/Brandfolder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrandfolderXs>`
- `<$BrandfolderSm>`
- `<$BrandfolderMd>`
- `<$BrandfolderLg>`





## Brandfolder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Brandfolder
include('simpleicons-14/B/Brandfolder')

' renders the element
Brandfolder('Brandfolder', 'Brandfolder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brandfolder
include('simpleicons-14/B/Brandfolder')

' renders the element
Brandfolder('Brandfolder', 'Brandfolder', 'an optional tech label', 'an optional description')
@enduml
```

