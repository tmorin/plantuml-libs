# Equals


```text
fontawesome/Solid/Equals
```

```text
include('fontawesome/Solid/Equals')
```



| Illustration | Equals |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Equals.png) | ![illustration for Equals](../../fontawesome/Solid/Equals.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EqualsXs>`
- `<$EqualsSm>`
- `<$EqualsMd>`
- `<$EqualsLg>`





## Equals

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Equals
include('fontawesome/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Equals
include('fontawesome/Solid/Equals')

' renders the element
Equals('Equals', 'Equals', 'an optional tech label', 'an optional description')
@enduml
```

