# Gitkraken


```text
simpleicons-5/G/Gitkraken
```

```text
include('simpleicons-5/G/Gitkraken')
```



| Illustration | Gitkraken |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitkraken.png) | ![illustration for Gitkraken](../../simpleicons-5/G/Gitkraken.Local.png) |




## Gitkraken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitkraken
include('simpleicons-5/G/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label')
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

' loads the Item which embeds the element Gitkraken
include('simpleicons-5/G/Gitkraken')

' renders the element
Gitkraken('Gitkraken', 'Gitkraken', 'an optional tech label')
@enduml
```

