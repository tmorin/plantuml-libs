# Crunchbase


```text
simpleicons-14/C/Crunchbase
```

```text
include('simpleicons-14/C/Crunchbase')
```



| Illustration | Crunchbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Crunchbase.png) | ![illustration for Crunchbase](../../simpleicons-14/C/Crunchbase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrunchbaseXs>`
- `<$CrunchbaseSm>`
- `<$CrunchbaseMd>`
- `<$CrunchbaseLg>`





## Crunchbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Crunchbase
include('simpleicons-14/C/Crunchbase')

' renders the element
Crunchbase('Crunchbase', 'Crunchbase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crunchbase
include('simpleicons-14/C/Crunchbase')

' renders the element
Crunchbase('Crunchbase', 'Crunchbase', 'an optional tech label', 'an optional description')
@enduml
```

