# Shenzhenmetro


```text
simpleicons-5/S/Shenzhenmetro
```

```text
include('simpleicons-5/S/Shenzhenmetro')
```



| Illustration | Shenzhenmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shenzhenmetro.png) | ![illustration for Shenzhenmetro](../../simpleicons-5/S/Shenzhenmetro.Local.png) |




## Shenzhenmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-5/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shenzhenmetro
include('simpleicons-5/S/Shenzhenmetro')

' renders the element
Shenzhenmetro('Shenzhenmetro', 'Shenzhenmetro', 'an optional tech label')
@enduml
```

