# Perl


```text
simpleicons-5/P/Perl
```

```text
include('simpleicons-5/P/Perl')
```



| Illustration | Perl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Perl.png) | ![illustration for Perl](../../simpleicons-5/P/Perl.Local.png) |




## Perl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Perl
include('simpleicons-5/P/Perl')

' renders the element
Perl('Perl', 'Perl', 'an optional tech label')
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

' loads the Item which embeds the element Perl
include('simpleicons-5/P/Perl')

' renders the element
Perl('Perl', 'Perl', 'an optional tech label')
@enduml
```

