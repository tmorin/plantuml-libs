# Xamarin


```text
simpleicons-5/X/Xamarin
```

```text
include('simpleicons-5/X/Xamarin')
```



| Illustration | Xamarin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xamarin.png) | ![illustration for Xamarin](../../simpleicons-5/X/Xamarin.Local.png) |




## Xamarin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xamarin
include('simpleicons-5/X/Xamarin')

' renders the element
Xamarin('Xamarin', 'Xamarin', 'an optional tech label')
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

' loads the Item which embeds the element Xamarin
include('simpleicons-5/X/Xamarin')

' renders the element
Xamarin('Xamarin', 'Xamarin', 'an optional tech label')
@enduml
```

