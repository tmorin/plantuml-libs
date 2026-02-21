# Neos


```text
fontawesome/Brands/Neos
```

```text
include('fontawesome/Brands/Neos')
```



| Illustration | Neos |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Neos.png) | ![illustration for Neos](../../fontawesome/Brands/Neos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeosXs>`
- `<$NeosSm>`
- `<$NeosMd>`
- `<$NeosLg>`





## Neos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Neos
include('fontawesome/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Neos
include('fontawesome/Brands/Neos')

' renders the element
Neos('Neos', 'Neos', 'an optional tech label', 'an optional description')
@enduml
```

