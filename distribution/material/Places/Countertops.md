# Countertops


```text
material/Places/Countertops
```

```text
include('material/Places/Countertops')
```



| Illustration | Countertops |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Countertops.png) | ![illustration for Countertops](../../material/Places/Countertops.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CountertopsXs>`
- `<$CountertopsSm>`
- `<$CountertopsMd>`
- `<$CountertopsLg>`





## Countertops

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Countertops
include('material/Places/Countertops')

' renders the element
Countertops('Countertops', 'Countertops', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Countertops
include('material/Places/Countertops')

' renders the element
Countertops('Countertops', 'Countertops', 'an optional tech label', 'an optional description')
@enduml
```

