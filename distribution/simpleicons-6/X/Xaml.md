# Xaml


```text
simpleicons-6/X/Xaml
```

```text
include('simpleicons-6/X/Xaml')
```



| Illustration | Xaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xaml.png) | ![illustration for Xaml](../../simpleicons-6/X/Xaml.Local.png) |




## Xaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xaml
include('simpleicons-6/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label')
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

' loads the Item which embeds the element Xaml
include('simpleicons-6/X/Xaml')

' renders the element
Xaml('Xaml', 'Xaml', 'an optional tech label')
@enduml
```

