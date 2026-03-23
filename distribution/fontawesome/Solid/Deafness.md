# Deafness


```text
fontawesome/Solid/Deafness
```

```text
include('fontawesome/Solid/Deafness')
```



| Illustration | Deafness |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Deafness.png) | ![illustration for Deafness](../../fontawesome/Solid/Deafness.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeafnessXs>`
- `<$DeafnessSm>`
- `<$DeafnessMd>`
- `<$DeafnessLg>`





## Deafness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Deafness
include('fontawesome/Solid/Deafness')

' renders the element
Deafness('Deafness', 'Deafness', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deafness
include('fontawesome/Solid/Deafness')

' renders the element
Deafness('Deafness', 'Deafness', 'an optional tech label', 'an optional description')
@enduml
```

