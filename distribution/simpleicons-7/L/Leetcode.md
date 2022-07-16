# Leetcode


```text
simpleicons-7/L/Leetcode
```

```text
include('simpleicons-7/L/Leetcode')
```



| Illustration | Leetcode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Leetcode.png) | ![illustration for Leetcode](../../simpleicons-7/L/Leetcode.Local.png) |




## Leetcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Leetcode
include('simpleicons-7/L/Leetcode')

' renders the element
Leetcode('Leetcode', 'Leetcode', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Leetcode
include('simpleicons-7/L/Leetcode')

' renders the element
Leetcode('Leetcode', 'Leetcode', 'an optional tech label')
@enduml
```

