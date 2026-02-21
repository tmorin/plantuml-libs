# Hashnode


```text
fontawesome/Brands/Hashnode
```

```text
include('fontawesome/Brands/Hashnode')
```



| Illustration | Hashnode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Hashnode.png) | ![illustration for Hashnode](../../fontawesome/Brands/Hashnode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HashnodeXs>`
- `<$HashnodeSm>`
- `<$HashnodeMd>`
- `<$HashnodeLg>`





## Hashnode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hashnode
include('fontawesome/Brands/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hashnode
include('fontawesome/Brands/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label', 'an optional description')
@enduml
```

