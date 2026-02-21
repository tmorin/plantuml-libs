# Genderless


```text
fontawesome/Solid/Genderless
```

```text
include('fontawesome/Solid/Genderless')
```



| Illustration | Genderless |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Genderless.png) | ![illustration for Genderless](../../fontawesome/Solid/Genderless.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GenderlessXs>`
- `<$GenderlessSm>`
- `<$GenderlessMd>`
- `<$GenderlessLg>`





## Genderless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Genderless
include('fontawesome/Solid/Genderless')

' renders the element
Genderless('Genderless', 'Genderless', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Genderless
include('fontawesome/Solid/Genderless')

' renders the element
Genderless('Genderless', 'Genderless', 'an optional tech label', 'an optional description')
@enduml
```

