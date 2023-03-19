# Keycdn


```text
fontawesome-6/Brands/Keycdn
```

```text
include('fontawesome-6/Brands/Keycdn')
```



| Illustration | Keycdn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Keycdn.png) | ![illustration for Keycdn](../../fontawesome-6/Brands/Keycdn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeycdnXs>`
- `<$KeycdnSm>`
- `<$KeycdnMd>`
- `<$KeycdnLg>`





## Keycdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Keycdn
include('fontawesome-6/Brands/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Keycdn
include('fontawesome-6/Brands/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label', 'an optional description')
@enduml
```

