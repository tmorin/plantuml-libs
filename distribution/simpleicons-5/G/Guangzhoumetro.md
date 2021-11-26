# Guangzhoumetro


```text
simpleicons-5/G/Guangzhoumetro
```

```text
include('simpleicons-5/G/Guangzhoumetro')
```



| Illustration | Guangzhoumetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Guangzhoumetro.png) | ![illustration for Guangzhoumetro](../../simpleicons-5/G/Guangzhoumetro.Local.png) |




## Guangzhoumetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Guangzhoumetro
include('simpleicons-5/G/Guangzhoumetro')

' renders the element
Guangzhoumetro('Guangzhoumetro', 'Guangzhoumetro', 'an optional tech label')
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

' loads the Item which embeds the element Guangzhoumetro
include('simpleicons-5/G/Guangzhoumetro')

' renders the element
Guangzhoumetro('Guangzhoumetro', 'Guangzhoumetro', 'an optional tech label')
@enduml
```

