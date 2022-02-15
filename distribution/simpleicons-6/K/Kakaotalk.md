# Kakaotalk


```text
simpleicons-6/K/Kakaotalk
```

```text
include('simpleicons-6/K/Kakaotalk')
```



| Illustration | Kakaotalk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kakaotalk.png) | ![illustration for Kakaotalk](../../simpleicons-6/K/Kakaotalk.Local.png) |




## Kakaotalk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kakaotalk
include('simpleicons-6/K/Kakaotalk')

' renders the element
Kakaotalk('Kakaotalk', 'Kakaotalk', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kakaotalk
include('simpleicons-6/K/Kakaotalk')

' renders the element
Kakaotalk('Kakaotalk', 'Kakaotalk', 'an optional tech label')
@enduml
```

