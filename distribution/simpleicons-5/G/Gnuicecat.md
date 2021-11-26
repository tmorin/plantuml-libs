# Gnuicecat


```text
simpleicons-5/G/Gnuicecat
```

```text
include('simpleicons-5/G/Gnuicecat')
```



| Illustration | Gnuicecat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gnuicecat.png) | ![illustration for Gnuicecat](../../simpleicons-5/G/Gnuicecat.Local.png) |




## Gnuicecat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gnuicecat
include('simpleicons-5/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label')
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

' loads the Item which embeds the element Gnuicecat
include('simpleicons-5/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label')
@enduml
```

