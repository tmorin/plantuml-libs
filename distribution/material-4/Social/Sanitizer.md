# Sanitizer


```text
material-4/Social/Sanitizer
```

```text
include('material-4/Social/Sanitizer')
```



| Illustration | Sanitizer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Sanitizer.png) | ![illustration for Sanitizer](../../material-4/Social/Sanitizer.Local.png) |




## Sanitizer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Sanitizer
include('material-4/Social/Sanitizer')

' renders the element
Sanitizer('Sanitizer', 'Sanitizer', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Sanitizer
include('material-4/Social/Sanitizer')

' renders the element
Sanitizer('Sanitizer', 'Sanitizer', 'an optional tech label')
@enduml
```

