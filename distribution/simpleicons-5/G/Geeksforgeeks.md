# Geeksforgeeks


```text
simpleicons-5/G/Geeksforgeeks
```

```text
include('simpleicons-5/G/Geeksforgeeks')
```



| Illustration | Geeksforgeeks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Geeksforgeeks.png) | ![illustration for Geeksforgeeks](../../simpleicons-5/G/Geeksforgeeks.Local.png) |




## Geeksforgeeks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Geeksforgeeks
include('simpleicons-5/G/Geeksforgeeks')

' renders the element
Geeksforgeeks('Geeksforgeeks', 'Geeksforgeeks', 'an optional tech label')
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

' loads the Item which embeds the element Geeksforgeeks
include('simpleicons-5/G/Geeksforgeeks')

' renders the element
Geeksforgeeks('Geeksforgeeks', 'Geeksforgeeks', 'an optional tech label')
@enduml
```

