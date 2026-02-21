# Angellist


```text
fontawesome/Brands/Angellist
```

```text
include('fontawesome/Brands/Angellist')
```



| Illustration | Angellist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Angellist.png) | ![illustration for Angellist](../../fontawesome/Brands/Angellist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngellistXs>`
- `<$AngellistSm>`
- `<$AngellistMd>`
- `<$AngellistLg>`





## Angellist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Angellist
include('fontawesome/Brands/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angellist
include('fontawesome/Brands/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label', 'an optional description')
@enduml
```

