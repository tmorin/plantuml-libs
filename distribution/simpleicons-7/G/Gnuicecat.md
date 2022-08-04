# Gnuicecat


```text
simpleicons-7/G/Gnuicecat
```

```text
include('simpleicons-7/G/Gnuicecat')
```



| Illustration | Gnuicecat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gnuicecat.png) | ![illustration for Gnuicecat](../../simpleicons-7/G/Gnuicecat.Local.png) |




## Gnuicecat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gnuicecat
include('simpleicons-7/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gnuicecat
include('simpleicons-7/G/Gnuicecat')

' renders the element
Gnuicecat('Gnuicecat', 'Gnuicecat', 'an optional tech label', 'an optional description')
@enduml
```

