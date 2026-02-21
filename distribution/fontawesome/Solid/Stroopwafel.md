# Stroopwafel


```text
fontawesome/Solid/Stroopwafel
```

```text
include('fontawesome/Solid/Stroopwafel')
```



| Illustration | Stroopwafel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stroopwafel.png) | ![illustration for Stroopwafel](../../fontawesome/Solid/Stroopwafel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StroopwafelXs>`
- `<$StroopwafelSm>`
- `<$StroopwafelMd>`
- `<$StroopwafelLg>`





## Stroopwafel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stroopwafel
include('fontawesome/Solid/Stroopwafel')

' renders the element
Stroopwafel('Stroopwafel', 'Stroopwafel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stroopwafel
include('fontawesome/Solid/Stroopwafel')

' renders the element
Stroopwafel('Stroopwafel', 'Stroopwafel', 'an optional tech label', 'an optional description')
@enduml
```

