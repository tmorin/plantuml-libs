# Bioconductor


```text
simpleicons/B/Bioconductor
```

```text
include('simpleicons/B/Bioconductor')
```



| Illustration | Bioconductor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bioconductor.png) | ![illustration for Bioconductor](../../simpleicons/B/Bioconductor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BioconductorXs>`
- `<$BioconductorSm>`
- `<$BioconductorMd>`
- `<$BioconductorLg>`





## Bioconductor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bioconductor
include('simpleicons/B/Bioconductor')

' renders the element
Bioconductor('Bioconductor', 'Bioconductor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bioconductor
include('simpleicons/B/Bioconductor')

' renders the element
Bioconductor('Bioconductor', 'Bioconductor', 'an optional tech label', 'an optional description')
@enduml
```

