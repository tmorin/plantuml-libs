# Googlecardboard


```text
simpleicons-5/G/Googlecardboard
```

```text
include('simpleicons-5/G/Googlecardboard')
```



| Illustration | Googlecardboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlecardboard.png) | ![illustration for Googlecardboard](../../simpleicons-5/G/Googlecardboard.Local.png) |




## Googlecardboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlecardboard
include('simpleicons-5/G/Googlecardboard')

' renders the element
Googlecardboard('Googlecardboard', 'Googlecardboard', 'an optional tech label')
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

' loads the Item which embeds the element Googlecardboard
include('simpleicons-5/G/Googlecardboard')

' renders the element
Googlecardboard('Googlecardboard', 'Googlecardboard', 'an optional tech label')
@enduml
```

