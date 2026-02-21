# Gripfire


```text
fontawesome/Brands/Gripfire
```

```text
include('fontawesome/Brands/Gripfire')
```



| Illustration | Gripfire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Gripfire.png) | ![illustration for Gripfire](../../fontawesome/Brands/Gripfire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GripfireXs>`
- `<$GripfireSm>`
- `<$GripfireMd>`
- `<$GripfireLg>`





## Gripfire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gripfire
include('fontawesome/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gripfire
include('fontawesome/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label', 'an optional description')
@enduml
```

