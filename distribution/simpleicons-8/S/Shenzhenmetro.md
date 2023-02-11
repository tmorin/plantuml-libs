# Shenzhenmetro


```text
simpleicons-8/S/Shenzhenmetro
```

```text
include('simpleicons-8/S/Shenzhenmetro')
```



| Illustration | Shenzhenmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Shenzhenmetro.png) | ![illustration for Shenzhenmetro](../../simpleicons-8/S/Shenzhenmetro.Local.png) |




## Shenzhenmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-8/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-8/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label', 'an optional description')
@enduml
```

